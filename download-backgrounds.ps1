# Define the assets directory
$assetsDir = "public/assets"

# Create the assets directory if it doesn't exist
if (-not (Test-Path $assetsDir)) {
    New-Item -ItemType Directory -Path $assetsDir -Force
}

# Define the image URLs and their corresponding filenames
$images = @{
    "tech-bg.jpg" = "https://images.unsplash.com/photo-1518770660439-4636190af475"
    "space-bg.jpg" = "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
    "code-bg.jpg" = "https://images.unsplash.com/photo-1555066931-4365d14fb8c0"
    "project-bg.jpg" = "https://images.unsplash.com/photo-1550745165-9bc0b252726f"
    "contact-bg.jpg" = "https://images.unsplash.com/photo-1557683316-973673baf926"
}

# Download each image
foreach ($image in $images.GetEnumerator()) {
    $outputPath = Join-Path $assetsDir $image.Key
    Write-Host "Downloading $($image.Key)..."
    Invoke-WebRequest -Uri $image.Value -OutFile $outputPath
}

Write-Host "Background images downloaded successfully!" 