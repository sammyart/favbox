import { DATA_TYPE } from 'jsstore';
import connection from './connection';

const getDb = () => {
  const tblBookmarks = {
    name: 'bookmarks',
    columns: {
      id: {
        primaryKey: true,
        autoIncrement: true,
        dataType: DATA_TYPE.Number,
      },
      borwser_id: {
        dataType: DATA_TYPE.Number,
        notNull: true,
      },
      title: {
        notNull: true,
        dataType: DATA_TYPE.String,
        default: 'Untitled',
        enableSearch: true,
      },
      description: {
        dataType: DATA_TYPE.String,
        enableSearch: true,
      },
      domain: {
        dataType: DATA_TYPE.String,
        enableSearch: false,
      },
      url: {
        dataType: DATA_TYPE.String,
        enableSearch: false,
      },
      folder: {
        dataType: DATA_TYPE.String,
        enableSearch: true,
      },
      favicon: {
        dataType: DATA_TYPE.String,
        enableSearch: false,
      },
      image: {
        dataType: DATA_TYPE.String,
        enableSearch: false,
      },
      tags: {
        dataType: DATA_TYPE.Array,
        multiEntry: true,
        default: [],
      },
      parentId: {
        dataType: DATA_TYPE.Number,
      },
      favorite: {
        notNull: true,
        dataType: DATA_TYPE.Number,
        default: 0,
      },
      created_at: {
        dataType: DATA_TYPE.String,
        notNull: true,
        enableSearch: true,
      },
      updated_at: {
        dataType: DATA_TYPE.String,
        notNull: true,
        enableSearch: true,
      },
    },
  };

  const database = {
    name: 'linkflow',
    tables: [tblBookmarks],
  };
  return database;
};

const initStorage = async () => {
  const newDb = await connection.initDb(getDb());

  return newDb;
};

export default initStorage;
