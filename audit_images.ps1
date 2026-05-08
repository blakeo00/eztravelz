Add-Type -AssemblyName System.Drawing
$files = @('Col.jpg','Sis.jpg','Tre.jpg','AF.jpg','JO.jpg','RI.jpg','BL.jpg','Red.jpg','Lemur.jpg','Bobo.jpg','Nosy.jpg','Amb.jpg','Tsi.jpg','Hell.jpg','Dam.jpg','VG.jpg')
foreach($f in $files){
    $p = Join-Path 'c:\Users\USER\eztravelz\public\images' $f
    if(Test-Path $p){
        $img = [System.Drawing.Image]::FromFile($p)
        $r = [math]::Round($img.Width/$img.Height,2)
        $status = 'PASS'
        if($img.Width -lt 1200){ $status = 'UNDERSIZED' }
        elseif($r -lt 1.3){ $status = 'LOW-RATIO' }
        elseif($r -gt 2.5){ $status = 'HIGH-RATIO' }
        Write-Host ("{0,-12} {1,5}x{2,-5} ratio={3,-5} {4}" -f $f,$img.Width,$img.Height,$r,$status)
        $img.Dispose()
    } else {
        Write-Host ("{0,-12} NOT FOUND" -f $f)
    }
}
