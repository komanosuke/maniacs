# Load the Rails application.
require_relative "application"

Rails.application.reloader.to_prepare do
    require_dependency 'application_record'
    require_dependency 'image_uploader'
end

# Initialize the Rails application.
Rails.application.initialize!
