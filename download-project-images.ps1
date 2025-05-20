# Define the assets directory
$assetsDir = "public/assets"

# Create the assets directory if it doesn't exist
if (-not (Test-Path $assetsDir)) {
    New-Item -ItemType Directory -Path $assetsDir -Force
}

# Define the image URLs and their corresponding filenames
$images = @{
    "chatbot-bg.jpg" = "https://images.unsplash.com/photo-1677442136019-21780ecad995"
    "todo-bg.jpg" = "https://images.unsplash.com/photo-1677442136019-21780ecad995"
}

# Download each image
foreach ($image in $images.GetEnumerator()) {
    $outputPath = Join-Path $assetsDir $image.Key
    Write-Host "Downloading $($image.Key)..."
    Invoke-WebRequest -Uri $image.Value -OutFile $outputPath
}

Write-Host "Project background images downloaded successfully!" 