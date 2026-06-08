```
=# S11 Lab — AI Vibecoding II: Customer Feedback Dashboard
```

```
**Course:** HSB3057E Digital Transformation
**Duration:** ~100 minutes
```

```
**Deliverable:** Working multi-page app + public GitHub repo + spec document +
`CLAUDE.md` + instructor skill
```

```
**Submission:** Paste GitHub URL into LMS by end of class
```

```
---
```

## `## Lab Overview` 

```
In ~100 minutes, you will build a customer feedback dashboard for a Vietnamese
coffee chain. You will write a spec first, **give Claude persistent project
context (a `CLAUDE.md` and a reusable skill)**, scaffold the app, build the
submit form, add the admin table, add filters, add sentiment color, add CSV
export, and push to GitHub. Each step ends with a git commit.
```

```
This is the lab where you internalize the discipline: set up context once, spec
first, prompts sequenced, commits between steps, debugging with precision.
```

```
> **New this session:** `CLAUDE.md` and skills. A `CLAUDE.md` is a project
memory file Claude Code reads automatically at the start of every session — put
your stack, conventions, and rules there once instead of repeating them in every
prompt. A **skill** is a reusable instruction pack (your instructor supplies
one) that Claude loads when relevant. Together they make every later prompt
shorter and more consistent — and they're how a whole group keeps one standard
across many apps.
```

```
---
```

```
## Part 0 — Spec First (10 min)
```

```
Open VS Code termnial. Create a new folder: (or do it with mouse via create
folder under file)
```

```
```bash
mkdir feedback-dashboard
cd feedback-dashboard
git init
code .
```
```

```
Create `SPEC.md` with this content (edit if you need), this are files on the
left hand panel:
```

```
```markdown
```

```
# Customer Feedback Dashboard — Spec
```

```
## Users
```

```
- **Customers:** submit feedback via /submit page (anonymous OK)
- **Managers:** view all feedback via /admin page
```

```
## Screens
```

```
1. **/submit** — feedback form
```

```
2. **/admin** — table of all feedback with filters
```

```
## Data fields
```

```
- name (text, optional)
- location (dropdown: District 1, District 3, Thao Dien)
- rating (1-5)
- comment (textarea, required)
```

```
- timestamp (auto-generated)
```

## `## Storage` 

- `Browser localStorage (no server today)` 

```
## Filters on /admin
```

- `Location` 

- `Minimum rating` 

- `Date range (from / to)` 

## `## Sentiment indicator` 

```
- Rating 1-2: red background
```

- `Rating 3: yellow background` 

- `Rating 4-5: green background` 

## `## Export` 

- `"Export CSV" button on /admin downloads filtered rows` 

```
## Out of scope (today)
```

- `Authentication` 

- `Real database` 

- `Email notifications - Multi-language UI ```` 

```
Commit:
```

```
```bash
git add SPEC.md
git commit -m "spec: customer feedback dashboard"
```
```

```
---
```

```
## Part 1 — Give Claude Project Context: CLAUDE.md + Skill (10 min)
```

```
Before Claude writes a single line, give it two things that make every later
prompt shorter, better, and more consistent.
```

```
### 1.1 Create CLAUDE.md
```

```
In the project root, create a file named `CLAUDE.md`:
```

```
```markdown
```

```
# Customer Feedback Dashboard — Project Instructions
```

## `## Stack` 

```
- Plain HTML, CSS, JavaScript. No build tools.
```

- `Tailwind CSS via CDN for styling only.` 

- `Data stored in browser localStorage under the key `feedbackEntries`.` 

## `## Conventions` 

- `All files UTF-8; support Vietnamese text everywhere.` 

- `Keep shared CSS/JS in /shared.` 

- `Dates formatted DD/MM/YYYY for a Vietnamese audience.` 

```
- Make the smallest change that satisfies the request; do not refactor unrelated
files.
```

## `## Reference` 

- `The full feature list is in SPEC.md — read it before building.` 

```
## Out of scope (this session)
```

- `Authentication, real database, email, multi-language UI.` 

```
```
```

```
**Why this matters:** Claude Code reads `CLAUDE.md` automatically at the start
of every session. Anything here applies to *every* prompt — so you stop retyping
"plain HTML, no frameworks, UTF-8" and Claude stops forgetting it.
```

```
### 1.2 Copy in the instructor's skill
```

```
A **skill** is a reusable instruction pack. Claude Code finds skills in a
specific folder:
```

```
```
your-project/
  .claude/
    skills/
      /
        SKILL.md
```
```

```
Steps:
```

```
1. Create the folder (Git Bash):
```

```
   ```bash
   mkdir -p .claude/skills/
   ```
```

```
   (PowerShell alternative: `New-Item -ItemType Directory -Force
.claude/skills/`. Or just create the folders in the VS Code file explorer.)
```

```
2. Copy the instructor's `SKILL.md` into `.claude/skills//`. Drag it in the VS
Code explorer, or copy via terminal. Use the skill's own name for ``.
```

```
**LINK**:
https://1drv.ms/t/c/2f0366f5398b4ebc/IQBUVX6BlaiES7SqZ0AL6VwxASdK9Yh7SbnypqJ34v4
pN_U?e=bhulph
```

```
3. Open the file and read the top. Every skill starts with **frontmatter** — a
`name` and a `description`. The `description` is how Claude decides *when* the
skill applies, so read it to know what this skill does.
```

```
### 1.3 Verify Claude picks both up
```

```
Launch Claude Code:
```

```
```bash
claude
```
```

```
Then ask:
```

```
> What project instructions and skills do you have available here?
```

```
Claude should mention your `CLAUDE.md` context and list the skill by name. If it
doesn't see the skill, the folder path is wrong — confirm it is exactly
`.claude/skills//SKILL.md`.
```

```
### 1.4 Commit
```

```
```bash
git add CLAUDE.md .claude/
git commit -m "project context: CLAUDE.md + instructor skill"
```
```

```
**Checkpoint:** `CLAUDE.md` sits in the project root; the skill sits under
```

```
`.claude/skills/`; Claude acknowledges both when asked.
```

```
---
```

```
## Part 2 — Scaffold (15 min)
```

```
Launch Claude Code:
```

```
```bash
claude
```
```

```
Send this prompt:
```

- `Read SPEC.md. Build the initial scaffold for the customer feedback dashboard: >` 

```
> - Use plain HTML, CSS, JavaScript — no frameworks except Tailwind CSS via CDN
for styling
```

```
> - Two pages: index.html (redirects to /submit) and pages submit.html and
admin.html
```

```
> - Top navigation bar with links to "Submit Feedback" and "Admin View" —
visible on both pages
```

```
> - Place shared CSS/JS in /shared
```

```
> - For now, /submit and /admin are placeholder pages with just their heading
and the nav
```

```
> - Use Vietnamese-friendly UTF-8 encoding throughout
```

```
Let Claude create the files. Open `submit.html` in your browser — verify the nav
works and you can click between pages.
```

```
Commit:
```

```
```bash
git add .
git commit -m "scaffold: nav and placeholder pages"
```
```

```
**Checkpoint:** Both pages load, nav links work, no console errors.
```

```
---
```

```
## Part 3 — Submit Form (15 min)
```

```
Prompt:
```

```
> On the /submit page, build the feedback form per SPEC.md:
```

```
>
> - Inputs: name (optional text), location (dropdown with the three options from
spec), rating (1-5 radio buttons or a 5-star widget), comment (textarea,
required)
```

```
> - Submit button
```

```
> - On submit, validate (comment required, rating required) and save to
localStorage under key 'feedbackEntries' as a JSON array
```

```
> - Show a success message "Thanks for your feedback" and reset the form
```

```
> - If localStorage already has entries, append the new one, don't overwrite
```

```
Test:
```

`1. Submit a feedback with all fields → check success message.` 

`2. Submit with empty comment → expect validation error.` 

`3. Open browser DevTools → Application tab → Local Storage → confirm entry saved.` 

`4. Submit a second feedback → confirm both entries are in localStorage.` 

```
Commit:
```

```
```bash
git add .
```

```
git commit -m "submit form: validation + localStorage save"
```
```

```
---
```

```
## Part 4 — Admin Table (15 min)
```

```
Prompt:
```

```
> On the /admin page, read all entries from localStorage and render them in a
table:
```

```
>
```

```
> - Columns: Date, Location, Rating, Name, Comment
```

- `- Newest first` 

```
> - Format date as "DD/MM/YYYY HH:mm"
```

- `- If localStorage is empty, show "No feedback yet"` 

```
> - Use Tailwind for a clean table style
```

```
Test:
```

`1. With 2–3 entries already in localStorage from Part 3, refresh /admin → table shows entries.` 

`2. Open DevTools → Application → Local Storage → manually delete the entries → refresh /admin → "No feedback yet".` 

`3. Submit a new feedback at /submit → return to /admin → it appears.` 

```
Commit:
```

```
```bash
```

```
git add .
git commit -m "admin table: render entries from localStorage"
```
```

```
---
```

```
## Part 5 — Filters (15 min)
```

```
Prompt:
```

```
> Above the admin table, add three filters:
```

```
>
```

- `- Location dropdown (with "All locations" as the default)` 

- `- Minimum rating dropdown (1-5, default 1 = show all)` 

- `- Date range: From date, To date inputs (both optional)` 

- 

- `Filters apply immediately on change (no Apply button). Show the count of visible rows: "Showing X of Y feedbacks". >` 

- `If filters produce no matches, show "No feedback matches your filters".` 

```
Test each filter:
```

`1. Filter by location = District 1 → only District 1 rows show.` 

`2. Set minimum rating to 4 → only 4 and 5 star rows.` 

`3. Set date range that excludes all → "No feedback matches" message.` 

`4. Clear all filters → all rows return.` 

```
Commit:
```

```
```bash
```

```
git add .
git commit -m "admin filters: location, rating, date range"
```
```

```
---
```

```
## Part 6 — Sentiment Color (5 min)
```

```
Prompt:
```

```
> Color-code each row in the admin table by rating:
>
```

```
> - 1-2 stars: light red background
```

```
> - 3 stars: light yellow background
```

- `- 4-5 stars: light green background` 

```
>
```

```
> Keep the text readable (use Tailwind's bg-red-100, bg-yellow-100, bg-
green-100).
```

```
Test: each row has the right color.
```

```
Commit:
```

```
```bash
git add .
git commit -m "sentiment color coding by rating"
```
```

```
---
```

```
## Part 7 — CSV Export (10 min)
```

```
Prompt:
```

```
> Add an "Export CSV" button above the admin table. Clicking it:
>
```

```
> - Exports the currently-filtered rows (respect active filters)
```

- `- Includes a header row: Date,Location,Rating,Name,Comment` 

- `- Uses UTF-8 with BOM so Vietnamese characters render correctly in Excel` 

- `- Wraps the Comment field in double-quotes to handle commas inside text` 

- `- Downloads as 'feedback-export-YYYY-MM-DD.csv'` 

```
> - If no rows to export, show an alert "Nothing to export"
```

## `Test:` 

`1. Click Export with all rows → CSV downloads, opens in Excel, Vietnamese characters look right.` 

`2. Filter to one location → Export → CSV contains only that location.` 

`3. Clear localStorage → Export → "Nothing to export" alert.` 

```
Commit:
```

```
```bash
git add .
git commit -m "csv export with vietnamese UTF-8 BOM"
```
```

```
---
```

```
## Part 8 — Push to GitHub (5 min)
```

`1. Create a new public repo on github.com: `feedback-dashboard`.` 

`2. Push:` 

```
```bash
```

```
git remote add origin https://github.com//feedback-dashboard.git
git branch -M main
```

```
git push -u origin main
```

```
```
```

`3. Verify the repo on github.com shows all files including `SPEC.md`.` 

```
---
```

## `## Deliverable` 

```
Submit to LMS:
```

```
```
```

```
https://github.com//feedback-dashboard
```
```

```
---
```

```
## Self-Check Rubric (17 points)
```

```
| Criterion | Points | Earned When |
```

```
|---|---|---|
```

```
| SPEC.md committed first | 1 | First commit is the spec |
```

```
| CLAUDE.md created with stack + conventions | 1 | File exists at project root,
committed |
```

```
| Instructor skill copied to `.claude/skills/` and recognized | 1 | Claude lists
the skill when asked |
```

```
| Two-page navigation works | 1 | Both pages load; nav clicks between them |
```

```
| Form submits, validates, persists to localStorage | 3 | Required-field check
works; DevTools shows entries |
```

```
| Admin table renders entries, newest first | 2 | Most recent at top; correct
date format |
```

```
| All three filters work, including combinations | 3 | Location alone; rating
alone; combined; date range |
```

```
| Sentiment color coding correct | 1 | 1–2 red; 3 yellow; 4–5 green |
```

```
| CSV export with Vietnamese chars renders in Excel | 2 | "phở" reads correctly
in Excel after export |
```

```
| Empty state shown when no data and when no matches | 1 | "No feedback yet" +
"No feedback matches your filters" |
```

```
| Code pushed to public GitHub | 1 | Repo URL accessible to others |
```

```
---
```

```
## Troubleshooting
```

```
| Problem | Cause | Fix |
```

```
|---|---|---|
```

```
| **Submit doesn't save anything** | `localStorage.setItem` without
`JSON.stringify` | Tell Claude: "Submit runs but Application → Local Storage
shows nothing. Check we JSON.stringify the array before saving." |
```

```
| **Admin table empty despite localStorage entries** | Key mismatch (save uses
'feedbackEntries', read uses 'feedback') | Show Claude both files; ask it to
align |
```

```
| **Vietnamese characters in CSV look like garbage** | UTF-8 BOM missing | Tell
Claude: "Prepend `` to the CSV string before creating the Blob. Excel needs the
BOM to recognize UTF-8." |
```

```
| **Filters reset when navigating between pages** | Expected — filter state is
local to /admin | Save filter state to localStorage if you want persistence (not
in scope today) |
| **Claude rewrote half the codebase for a small change** | Over-eager edit |
`git diff` to see; `git checkout .` to revert. Re-prompt: "Make only the minimal
change to do X. Do not touch other files." |
```

```
| **Date filter excludes all rows** | Comparing dates as strings | Tell Claude:
"The date filter compares strings instead of Date objects. Convert From, To, and
the entry timestamp to Date objects." |
```

```
| **localStorage is full** | Unlikely with hand entries | `localStorage.clear()`
in console |
```

```
---
```

```
## Going Further (Homework)
```

```
These become useful foundations for the S12 capstone:
```

- `Add **edit** and **delete** actions to admin rows.` 

- `Add a **search** that filters by keyword in Comment.` 

- `Add a **summary panel** at the top of /admin: total feedback count, average rating, most common location.` 

- `Add a **simple chart** (vanilla Chart.js via CDN): rating distribution as a bar chart.` 

- `Add **soft delete** — mark as hidden instead of removing, with a "Show hidden" toggle.` 

```
---
```

```
## Preparing for S12
```

```
Next session takes this app from localStorage to a real cloud-hosted
application. Before S12:
```

`1. Make sure `feedback-dashboard` repo on GitHub still works locally.` 

`2. Sign up for a free **Firebase account** at` 

`3. Sign up for a free **Vercel account** at [vercel.com](https://vercel.com).` 

`4. Read 10 minutes of Firebase's "Getting Started" guide — just enough to know what it is.` 

