import { Database } from "bun:sqlite";

const db = new Database("./app.sqlite");
const query = db.query("select 'some horse' as horse;");

query.get();