-- Active: 1648978634523@@127.0.0.1@5432@simple_todos
CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  task TEXT NOT NULL,
  completed BOOLEAN DEFAULT false,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
;