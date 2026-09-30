# Migration tools by stack

> The AI picks the **Recommended** row for the Profile's backend (`REC-data-n`), unless the dev names a tool. Contract and rules: `.cursor/rules/database.mdc`. Wrap the commands as `db:new · db:up · db:down · db:status · db:seed`.

| Backend / stack | Recommended tool | Folder | new | up | down | status | seed |
|-----------------|------------------|--------|-----|----|------|--------|------|
| **Node.js / TypeScript** (typed, ORM) | **Prisma Migrate** | `prisma/migrations` | `prisma migrate dev --name x` | `prisma migrate deploy` | forward-fix (`migrate reset` in dev only) | `prisma migrate status` | `prisma db seed` |
| Node.js (query builder) | Knex | `migrations/`, `seeds/` | `knex migrate:make x` | `knex migrate:latest` | `knex migrate:rollback` | `knex migrate:status` | `knex seed:run` |
| Node.js (alt) | Drizzle Kit · Sequelize CLI · TypeORM | tool default | `drizzle-kit generate` · `sequelize migration:generate` · `typeorm migration:create` | `drizzle-kit migrate` · `db:migrate` · `migration:run` | forward-fix · `db:migrate:undo` · `migration:revert` | — | seed script |
| **Python — Django** | Django migrations | `<app>/migrations` | `manage.py makemigrations` | `manage.py migrate` | `manage.py migrate <app> <prev>` | `manage.py showmigrations` | `manage.py loaddata` / custom command |
| **Python — FastAPI / Flask** | Alembic (SQLAlchemy) | `alembic/versions` | `alembic revision --autogenerate -m x` | `alembic upgrade head` | `alembic downgrade -1` | `alembic current` | `python -m app.seed` |
| **PHP — Laravel** | Artisan migrations | `database/migrations`, `database/seeders` | `php artisan make:migration x` | `php artisan migrate` | `php artisan migrate:rollback` | `php artisan migrate:status` | `php artisan db:seed` |
| **PHP — plain** | Phinx, or a small custom runner if Composer is not allowed (`migrations/*.php` with `up()`/`down()`) | `migrations/`, `seeds/` | `phinx create X` · `php migrate.php make x` | `phinx migrate` · `php migrate.php up` | `phinx rollback` · `php migrate.php down` | `phinx status` · `php migrate.php status` | `phinx seed:run` · `php seed.php` |
| **Ruby on Rails** | Active Record migrations | `db/migrate` | `rails g migration x` | `rails db:migrate` | `rails db:rollback` | `rails db:migrate:status` | `rails db:seed` |
| **Go** | goose (or golang-migrate) — SQL-native | `migrations/` | `goose create x sql` | `goose up` | `goose down` | `goose status` | seed SQL / small Go program |
| **Java / Kotlin** | Flyway (SQL-native) or Liquibase | `db/migration` | new `V<n>__x.sql` | `flyway migrate` | forward-fix (`undo` is paid) | `flyway info` | repeatable migration / seeder class |
| **.NET** | EF Core migrations | `Migrations/` | `dotnet ef migrations add X` | `dotnet ef database update` | `dotnet ef database update <prev>` | `dotnet ef migrations list` | `HasData` / seeder |
| **Elixir / Phoenix** | Ecto | `priv/repo/migrations` | `mix ecto.gen.migration x` | `mix ecto.migrate` | `mix ecto.rollback` | `mix ecto.migrations` | `mix run priv/repo/seeds.exs` |
| **Rust** | sqlx-cli (SQL-native) or Diesel | `migrations/` | `sqlx migrate add x` | `sqlx migrate run` | `sqlx migrate revert` | `sqlx migrate info` | seed binary |
| **Supabase / Postgres BaaS** | Supabase CLI (SQL-native) | `supabase/migrations` | `supabase migration new x` | `supabase db push` | forward-fix | `supabase migration list` | `supabase/seed.sql` |
| **MongoDB / NoSQL** | migrate-mongo (or the ODM's scripts) | `migrations/` | `migrate-mongo create x` | `migrate-mongo up` | `migrate-mongo down` | `migrate-mongo status` | seed script |

## Choosing (AI recommendation rules)
- Match the backend language first; then prefer the framework's built-in tool over a third-party one
- Respect intake constraints (e.g. "no Composer" → custom PHP runner; "no ORM" → SQL-native tool)
- Typed TS project → Prisma; lightweight/no-ORM Node → Knex
- If the tool has no `down`, record the forward-fix policy in Profile and keep a fresh-DB rebuild test
- `.sql` files are fine **only** for SQL-native tools, inside their folder

## Wrapper examples (record the real ones in Profile)
```jsonc
// Node (package.json)      "db:new":"knex migrate:make","db:up":"knex migrate:latest","db:down":"knex migrate:rollback","db:status":"knex migrate:status","db:seed":"knex seed:run"
```
```make
# Make (any stack)          db-up: ; alembic upgrade head        db-down: ; alembic downgrade -1
```
