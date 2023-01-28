-- Active: 1648978634523@@127.0.0.1@5432@simple_todos
-- First, let's delete the tables if they exist
DROP TABLE IF EXISTS todos;
-- Then, let's create the tables
CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  task TEXT NOT NULL,
  completed BOOLEAN DEFAULT false,
  "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);