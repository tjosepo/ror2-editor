$folder = Get-ChildItem ".\png\" -r -File

foreach ($file in $folder){
  $src = $file.Fullname
  $dest = $src -replace 'png', 'webp'
  & .\cwebp.exe -q 80 $src -o $dest
}