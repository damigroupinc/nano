import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
 
@Injectable()
export class DatabaseProvider {}
/*
  constructor(public sqlite: SQLite) {}

  public getDB() {
    return this.sqlite.create({
      name: 'nano.db',
      location: 'default',
    })
  }

  public createDatabase() {
    return this.getDB()
      .then((db: SQLiteObject) => {
      this.createTables(db);
      this.insertDefaultItems(db);
    })
    .catch (e => console.error(e));
    }
                                

  private createTables(db: SQLiteObject) {
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS categories ( id integer primary key AUTOINCREMENT NOT NULL, name TEXT)'],
      ['CREATE TABLE IF NOT EXISTS subcategories ( id integer primary key AUTOINCREMENT NOT NULL, id_category integer AUTOINCREMENT NOT NULL, name TEXT, FOREIGN KEY(id_category) REFERENCES categories(id))'],
    ])
      .then(() => console.log(' tableas criadas'))
      .catch(e => console.error('erro ao criar as tabelas', e));
  }

  private insertDefaultItems(db: SQLiteObject) {
    db.executeSql('select COUNT(id) as qtd from categories', [])
      .then((data: any) => {
        //Se não existe nenhum registro
        if (data.rows.item(0).qtd == 0) {
          // Criando as tabelas
          db.sqlBatch([
            ['insert into categories (name) values (?)', ['Foods']],
            ['insert into categories (name) values (?)', ['Pets']],
            ['insert into categories (name) values (?)', ['House']],
            ['insert into categories (name) values (?)', ['Education']],
            ['insert into categories (name) values (?)', ['Personals']],
            ['insert into categories (name) values (?)', ['Tax']],
            ['insert into categories (name) values (?)', ['Hobbies']],
            ['insert into categories (name) values (?)', ['Others']],
          ])
            .then(() => console.log('Dados categories incluídos'))
            .catch(e => console.error('Erro ao incluir dados padrões em categories', e));
        }
        db.executeSql('select COUNT(id) as qtd from subcategories', [])
          .then((data: any) => {
            //Se não existe nenhum registro
            if (data.rows.item(0).qtd == 0) {
              // Criando as tabelas
              db.sqlBatch([
                ['insert into subcategories (id_category, name) values (?)', [1, 'Meats']],
                ['insert into subcategories (id_category, name) values (?)', [1, 'Lunch']],
                ['insert into subcategories (id_category, name) values (?)', [1, 'Groceries']],
                ['insert into subcategories (id_category, name) values (?)', [1, 'Bakeries']],
                ['insert into subcategories (id_category, name) values (?)', [1, 'Restaurants']],
                ['insert into subcategories (id_category, name) values (?)', [1, 'Supermarkets']],
              ])
                .then(() => console.log('Dados Subcategories incluídos'))
                .catch(e => console.error('Erro ao incluir dados padrões em Subcategories', e));
            }
          })
          .catch(e => console.error('Erro ao consultar a qtd de categorias', e));
      })
  }
}
*/
