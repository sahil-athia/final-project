# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_18_164059) do

  create_table "connections", force: :cascade do |t|
    t.integer "sender_id", null: false
    t.integer "recipient_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["recipient_id"], name: "index_connections_on_recipient_id"
    t.index ["sender_id"], name: "index_connections_on_sender_id"
  end

  create_table "job_references", force: :cascade do |t|
    t.integer "job_id", null: false
    t.integer "organization_id", null: false
    t.integer "referred_by_id"
    t.integer "candidate_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "accepted"
    t.index ["candidate_id"], name: "index_job_references_on_candidate_id"
    t.index ["job_id"], name: "index_job_references_on_job_id"
    t.index ["organization_id"], name: "index_job_references_on_organization_id"
    t.index ["referred_by_id"], name: "index_job_references_on_referred_by_id"
  end

  create_table "jobs", force: :cascade do |t|
    t.integer "organization_id", null: false
    t.string "title"
    t.text "description"
    t.string "salary"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["organization_id"], name: "index_jobs_on_organization_id"
  end

  create_table "organizations", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.text "introduction"
    t.string "industry"
    t.text "website"
    t.text "location"
    t.text "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "shared_jobs", force: :cascade do |t|
    t.integer "job_id", null: false
    t.integer "referee_id"
    t.integer "candidate_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["candidate_id"], name: "index_shared_jobs_on_candidate_id"
    t.index ["job_id"], name: "index_shared_jobs_on_job_id"
    t.index ["referee_id"], name: "index_shared_jobs_on_referee_id"
  end

  create_table "tests", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.text "summary"
    t.string "industry"
    t.text "skills"
    t.text "education"
    t.text "experience"
    t.text "location"
    t.text "contact"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "resume_url"
    t.integer "organization_id"
    t.boolean "verified"
    t.string "password_digest"
    t.index ["organization_id"], name: "index_users_on_organization_id"
  end

  add_foreign_key "job_references", "jobs"
  add_foreign_key "job_references", "organizations"
  add_foreign_key "jobs", "organizations"
  add_foreign_key "shared_jobs", "jobs"
  add_foreign_key "users", "organizations"
end
