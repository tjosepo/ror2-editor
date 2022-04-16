$folder = Get-ChildItem ".\public\images\png\" -r -File

foreach ($file in $folder){
  $src = $file.Fullname
  $dest = $src -replace 'png', 'webp'
  $dir = Split-Path -Path $dest
  if (-not (Test-Path -Path $dir)) {
    New-Item -ItemType "directory" -Path $dir
  }
  & .\scripts\cwebp.exe -q 80 $src -o $dest
}