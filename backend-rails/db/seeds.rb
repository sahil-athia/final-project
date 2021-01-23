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
    password_digest: "$2a$12$DY.36e1b.5FJXub0ad5HW.buZtoLNfeggiadNDhLinCZUIYBxR5J.",
    image_url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1c2luZXNzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    profile_type: "organization"
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


  User.create({
    organization: Organization.first,
    name: "Random Name",
    email: "random@email.com",
    summary: Faker::Lorem.sentence,
    industry: "Business",
    skills: Faker::Lorem.sentence,
    education: Faker::Lorem.sentence,
    experience: Faker::Lorem.sentence,
    location: Faker::Address.street_address,
    contact: Faker::Lorem.sentence,
    verified: true,
    resume_url: "https://cdn.corporatefinanceinstitute.com/assets/investment-banking-resume-template-example.png",
    password_digest: "$2a$12$DY.36e1b.5FJXub0ad5HW.buZtoLNfeggiadNDhLinCZUIYBxR5J.",
    profile_type: "user",
    photo_url: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
  })

  User.create({
    organization: nil,
    name: Faker::Name.name,
    email: "example@email.com",
    summary: Faker::Lorem.sentence,
    industry: "Business",
    skills: Faker::Lorem.sentence,
    education: Faker::Lorem.sentence,
    experience: Faker::Lorem.sentence,
    location: Faker::Address.street_address,
    contact: Faker::Lorem.sentence,
    verified: false,
    resume_url: "https://cdn.corporatefinanceinstitute.com/assets/investment-banking-resume-template-example.png",
    password_digest: "$2a$12$DY.36e1b.5FJXub0ad5HW.buZtoLNfeggiadNDhLinCZUIYBxR5J.",
    profile_type: "user",
    photo_url: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
  })



  User.create({
    organization: nil,
    name: Faker::Name.name,
    email: "someone@email.com",
    summary: Faker::Lorem.sentence,
    industry: "Engineering",
    skills: Faker::Lorem.sentence,
    education: Faker::Lorem.sentence,
    experience: Faker::Lorem.sentence,
    location: Faker::Address.street_address,
    contact: Faker::Lorem.sentence,
    verified: false,
    resume_url: "https://cdn.corporatefinanceinstitute.com/assets/investment-banking-resume-template-example.png",
    password_digest: "$2a$12$DY.36e1b.5FJXub0ad5HW.buZtoLNfeggiadNDhLinCZUIYBxR5J.",
    profile_type: "user",
    photo_url: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
  })

  User.create({
    organization: nil,
    name: "Example Name",
    email: "something@email.com",
    summary: Faker::Lorem.sentence,
    industry: "Engineering",
    skills: Faker::Lorem.sentence,
    education: Faker::Lorem.sentence,
    experience: Faker::Lorem.sentence,
    location: Faker::Address.street_address,
    contact: Faker::Lorem.sentence,
    verified: false,
    resume_url: "https://cdn.corporatefinanceinstitute.com/assets/investment-banking-resume-template-example.png",
    password_digest: "$2a$12$DY.36e1b.5FJXub0ad5HW.buZtoLNfeggiadNDhLinCZUIYBxR5J.",
    profile_type: "user",
    photo_url: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
  })


User.create({
    organization: Organization.first,
    name: Faker::Name.name,
    email: "email@email.com",
    summary: Faker::Lorem.sentence,
    industry: "Arts",
    skills: Faker::Lorem.sentence,
    education: Faker::Lorem.sentence,
    experience: Faker::Lorem.sentence,
    location: Faker::Address.street_address,
    contact: Faker::Lorem.sentence,
    verified: false,
    resume_url: "https://cdn.corporatefinanceinstitute.com/assets/investment-banking-resume-template-example.png",
    password_digest: "$2a$12$DY.36e1b.5FJXub0ad5HW.buZtoLNfeggiadNDhLinCZUIYBxR5J.",
    profile_type: "user",
    photo_url: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
  })

  User.create({
    organization: Organization.first,
    name: "Example User Name",
    email: "person@email.com",
    summary: Faker::Lorem.sentence,
    industry: "Arts",
    skills: Faker::Lorem.sentence,
    education: Faker::Lorem.sentence,
    experience: Faker::Lorem.sentence,
    location: Faker::Address.street_address,
    contact: Faker::Lorem.sentence,
    verified: false,
    resume_url: "https://cdn.corporatefinanceinstitute.com/assets/investment-banking-resume-template-example.png",
    password_digest: "$2a$12$DY.36e1b.5FJXub0ad5HW.buZtoLNfeggiadNDhLinCZUIYBxR5J.",
    profile_type: "user",
    photo_url: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'
  })

Connection.create({
  sender: User.first,
  recipient: User.last
})

Connection.create({
  sender: User.first,
  recipient: User.third()
})

Connection.create({
  sender: User.second,
  recipient: User.last
})

SharedJob.create({
  job: Job.first,
  referee: User.first,
  candidate: User.last
})

SharedJob.create({
  job: Job.second,
  referee: User.first,
  candidate: User.second
})

JobReference.create({
  job: Job.last,
  organization: Organization.second,
  referred_by: User.first,
  candidate: User.last,
  accepted: false
})

JobReference.create({
  job: Job.second,
  organization: Organization.first,
  referred_by: User.last,
  candidate: User.second,
  accepted: false
})

JobReference.create({
  job: Job.first,
  organization: Organization.first,
  referred_by: User.second,
  candidate: User.last,
  accepted: false
})
