#!/usr/bin/env pwsh
# Script deploy CV lên GitHub Pages

Write-Host "🚀 Deploying Professional CV to GitHub Pages..." -ForegroundColor Cyan

# Kiểm tra có thay đổi chưa commit
$status = git status --porcelain
if ($status) {
    Write-Host "📝 Adding changes..." -ForegroundColor Yellow
    git add .
    
    $message = Read-Host "Nhập commit message (Enter để dùng mặc định)"
    if ([string]::IsNullOrWhiteSpace($message)) {
        $message = "Update CV - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    }
    
    Write-Host "💾 Committing changes..." -ForegroundColor Yellow
    git commit -m $message
}

Write-Host "⬆️  Pushing to GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host "" 
Write-Host "✅ Deploy initiated successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "🔗 Your CV will be available at:" -ForegroundColor Cyan
Write-Host "   https://jayc304.github.io/professional-cv/" -ForegroundColor White
Write-Host ""
Write-Host "📊 Check deployment status at:" -ForegroundColor Cyan
Write-Host "   https://github.com/JayC304/professional-cv/actions" -ForegroundColor White
Write-Host ""
Write-Host "⏱️  Deployment usually takes 2-3 minutes..." -ForegroundColor Yellow
