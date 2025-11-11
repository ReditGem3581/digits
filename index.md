![](https://github.com/ics-software-engineering/nextjs-application-template/raw/main/doc/landing-page.png)

nextjs-application-template is a sample Next.js 14 application that illustrates:

- A standard directory layout using 'src/' as recommended in the [Next.js Project Structure](https://nextjs.org/docs/getting-started/project-structure) guide.
- [Bootstrap 5 React](https://react-bootstrap.github.io/) for user interface.
- [React Hook Form](https://www.react-hook-form.com/) for form development.
- Authorization, authentication, and registration using [NextAuth.js](https://next-auth.js.org/).
- Initialization of users and data from a settings file.
- Alerts regarding success or failure of DB updates using [Sweet Alert](https://sweetalert.js.org/).
- Quality assurance using [ESLint](http://eslint.org) with packages to partially enforce the [Next.js ESLint rules](https://nextjs.org/docs/app/building-your-application/configuring/eslint) and the [AirBnB Javascript Style Guide](https://github.com/airbnb/javascript).

The goal of this template is to help you get quickly started doing Next.js development by providing a reasonable directory structure for development and deployment, a set of common extensions to the core framework, and boilerplate code to implement basic page display, navigation, forms, roles, and database manipulation.

To keep this codebase simple and small, some important capabilities are intentionally excluded from this template:

- Unit Testing
- Security
- Deployment

Examples of the these capabilities will be provided elsewhere.

## Installation

First, [install PostgreSQL](https://www.postgresql.org/download/). Then create a database for your application.

```

$ createdb nextjs-application-template
Password:
$

```

Second, go to [https://github.com/ics-software-engineering/nextjs-application-template](https://github.com/ics-software-engineering/nextjs-application-template), and click the "Use this template" button. Complete the dialog box to create a new repository that you own that is initialized with this template's files.

Third, go to your newly created repository, and click the "Clone or download" button to download your new GitHub repo to your local file system. Using [GitHub Desktop](https://desktop.github.com/) is a great choice if you use MacOS or Windows.

Fourth, cd into the directory of your local copy of the repo, and install third party libraries with:

```

$ npm install

```

Fifth, create a `.env` file from the `sample.env`. Set the `DATABASE_URL` variable to match your PostgreSQL database that you created in the first step. See the Prisma docs [Connect your database](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-typescript-postgresql). Then run the Prisma migration `npx prisma migrate dev` to set up the PostgreSQL tables.

```

$ npx prisma migrate dev
Environment variables loaded from .env
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "<your database name>", schema "public" at "localhost:5432"

Applying migration `20240708195109_init`

The following migration(s) have been applied:
---
title: "Digits — Contacts App"
---

<img src="doc/landing-page.png" alt="Digits landing" />

## Digits — Contacts (cleaned)

This repository contains a cleaned-up version of the Digits sample app (Contacts-focused). The app demonstrates Next.js (App Router), NextAuth.js authentication, Prisma ORM with PostgreSQL, and a Bootstrap-based UI.

Quick start

1. Copy `.env` from `sample.env` and update `DATABASE_URL` to point to a local Postgres database.

```powershell
$ npm install
$ npx prisma migrate dev
$ npx prisma db seed
$ npm run dev
```

2. Open http://localhost:3000 and sign in with `admin@foo.com` / `changeme` or `john@foo.com` / `changeme`.

What changed in this cleaned version

- Removed the legacy "Stuff" model and all related pages/components.
- Focused the UI on Contacts. The List and Admin pages show Contacts.
- Updated `prisma/schema.prisma` and `prisma/seed.ts` for the simplified schema.

Files of interest

- `prisma/schema.prisma` — Prisma schema (User and Contact models)
- `prisma/seed.ts` — Seed script creates default users and contacts from `config/settings.development.json`
- `src/app` — Next.js app routes (login, list, admin, etc.)
- `src/components` — UI components (Navbar, Footer, etc.)

If you'd like me to publish this `index.md` to GitHub Pages (enable Pages and select `main`), I can prepare the PR or instructions.
