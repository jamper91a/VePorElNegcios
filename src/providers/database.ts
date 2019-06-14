import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Api } from './api';
import { Util } from './util';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Platform } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Observable } from "rxjs/Observable";
@Injectable()
export class Database {

  private database_name:string = "VePorEl";
  private db:any=null;
  constructor(
    public http: Http,
    public api: Api,
    public util: Util,
    public plt: Platform,
    private sqlite: SQLite,
  ) {
  }


  public init_db(callback){
    var self=this;
    if(!this.plt.is('cordova')){

      var win: any = window;
      try {
        this.db = win.openDatabase(this.database_name, '1.0', `Store information`, 40 * 1024 * 1024);
        this.generate_sql(callback);

      } catch (e) {
        console.error(e);
      }
    }else{
      this.sqlite.create({
        name: this.database_name,
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          self.db = db;
          self.generate_sql(callback);
        })
        .catch(e => console.log(e));
    }


  }

  private generate_sql(callback){
    let self=this;
    this.db.transaction(function (tx) {
      var fields = new Array();
      var sql:string = "";
      fields.push(self.util.columns.name +" TEXT");
      fields.push(self.util.columns.createdAt+" TEXT");
      fields.push(self.util.columns.updatedAt+" TEXT");
      sql = self.generate_table(self.util.tables.offers_user, fields);
      self.doQuery(tx,sql, [], function () {
        callback();
      });

    });

  }

  private generate_table(table_name:string, fields:any[]){
    fields.push("id INTEGER  PRIMARY KEY");
    var sql = "create table IF NOT EXISTS %table_name (%columas);";
    sql = sql.replace("%table_name", table_name);
    sql = sql.replace("%columas", fields.toString());
    return sql;
  }



  public insert(table_name:string, fields, values){
    var self=this;
    this.db.transaction(function (tx) {
      for (var i=0; i<values.length;i++)
      {
        if(!Number.isFinite(values[i]))
          values[i] = "'"+values[i]+"'";
      }
      var sql = "INSERT or REPLACE INTO %t (%f) values(%v)";
      sql = sql.replace("%t", table_name);
      sql = sql.replace("%f", fields);
      sql = sql.replace("%v", values);
      self.doQuery(tx, sql, [], function () {
        console.log(sql);
      });
    });
  }

  public get__data_by_id(table_name:string, value, result){
    var self=this;
    this.db.transaction(function (tx) {

      var sql = "SELECT * FROM %t WHERE id = %v";
      sql = sql.replace("%t", table_name);
      sql = sql.replace("$v", value);
      self.doQuery(tx, sql, [], function (tx,rows) {
        result(rows);
      });
    });
  }

  public get_data_by_column(table_name:string, column:string, value, result){
    var self=this;
    this.db.transaction(function (tx) {
      if(!Number.isFinite(value))
        value = "'"+value+"'";

      var sql = "SELECT * FROM %t WHERE %c = %v";
      sql = sql.replace("%t", table_name);
      sql = sql.replace("%f", column);
      sql = sql.replace("$v", value);
      self.doQuery(tx, sql, [], function (tx,rows) {
        result(rows);
      });
    });
  }

  public get_data_by_sql(sql:string, result){
    var self=this;
    this.db.transaction(function (tx) {
      self.doQuery(tx, sql, [], function (tx,rows) {
        result(rows);
      });
    });
  }
  public get_data_by_table(table_name:string){
    let seq =  Observable.create(observer => {
      var self = this;
      var sql = "SELECT * FROM %t";
      sql = sql.replace("%t", table_name);
      this.db.transaction(function (tx) {
        self.doQuery(tx, sql, [], function (rows) {
          observer.next(rows.rows);
        });
      });
    });
    return seq;
  }
  private doQuery(tx, query, values, successHandler) {
    tx.executeSql(query, values, successHandler, function (transaction, error) {
    });
    // }
  }
}
