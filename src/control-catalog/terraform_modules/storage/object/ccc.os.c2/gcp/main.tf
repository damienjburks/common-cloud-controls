resource "google_storage_bucket" "malicious_storage_bucket" {
  name          = "${var.bucket_name}-ccc-os-c1"
  location      = "US"
  force_destroy = true

  versioning {
    enabled = true
  }
}