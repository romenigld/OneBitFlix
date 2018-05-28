Aws.config.update({
  region: 'eu-west-3',
  credentials:
  Aws::Credentials.new(Rails.application.credentials.aws_key,
                       Rails.application.credentials.aws_secret)
  })

  AWS_BUCKET = Aws::S3::Resource.new.bucket("onebit-flix")
