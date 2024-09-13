# frozen_string_literal: true

json.user do
  json.id @user.id
  json.name @user.name
  json.email @user.email
  json.belonged_organization_id @user.belonged_organization_id
end
