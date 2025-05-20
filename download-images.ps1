$assetsDir = "public/assets"
$images = @{
    "intro-bg.jpg" = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop"
    "about-bg.jpg" = "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop"
    "skills-bg.jpg" = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1920&auto=format&fit=crop"
    "projects-bg.jpg" = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1920&auto=format&fit=crop"
    "contact-bg.jpg" = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920&auto=format&fit=crop"
}

# Create assets directory if it doesn't exist
if (-not (Test-Path $assetsDir)) {
    New-Item -ItemType Directory -Path $assetsDir -Force
}

# Download each image
foreach ($image in $images.GetEnumerator()) {
    $outputPath = Join-Path $assetsDir $image.Key
    Write-Host "Downloading $($image.Key)..."
    Invoke-WebRequest -Uri $image.Value -OutFile $outputPath
}

Write-Host "All images downloaded successfully!" 