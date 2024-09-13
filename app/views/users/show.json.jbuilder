# frozen_string_literal: true

json.user do
  json.extract! @user,
    :id,
    :name,
    :email,
    :belonged_organization_id
end
