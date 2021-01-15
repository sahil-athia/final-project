# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do 
  Test.create({
    title: Faker::Book.title,
    body: Faker::Lorem.sentence
  })
end

5.times do
  Organization.create({
    name: Faker::Company.name,
    email: Faker::Internet.email,
    introduction: Faker::Lorem.sentence,
    industry: Faker::Lorem.characters(number: 10),
    website: Faker::Lorem.characters(number: 10),
    location: Faker::Address.street_address,
    image_url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c2luZXNzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  })
end

5.times do
  Job.create({
    organization: Organization.first,
    title: Faker::Job.name,
    description: Faker::Lorem.sentence,
    salary: "$60,000"
  })
end

2.times do
  User.create({
    organization: nil,
    name: "Random Name",
    email: "example@email.com",
    summary: Faker::Lorem.sentence,
    industry: "Buisness",
    skills: Faker::Lorem.sentence,
    education: Faker::Lorem.sentence,
    experience: Faker::Lorem.sentence,
    location: Faker::Address.street_address,
    contact: Faker::Lorem.sentence,
    resume_url: "https://cdn.corporatefinanceinstitute.com/assets/investment-banking-resume-template-example.png"
  })
end

Connection.create({
  sender: User.first,
  recipient: User.last
})

SharedJob.create({
  job: Job.first,
  referee: User.first,
  candidate: User.last
})

JobReference.create({
  job: Job.last,
  organization: Organization.second,
  referred_by: User.first,
  candidate: User.last
})
