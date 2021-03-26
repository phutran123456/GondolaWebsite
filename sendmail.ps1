F:
cd F:\gondolawebsite\GondolaWebsite\results
$jsonFiles = gci . *.json
$jsonResultNewest = ($jsonFiles | Sort LastWriteTime -Descending)[0]

$js = Get-Content .\$jsonResultNewest | ConvertFrom-Json

if ($js.stats.failures -ne 0)
{
	$Outlook = New-Object -ComObject Outlook.Application
	$Mail = $Outlook.CreateItem(0)
	$Mail.To = 'phu.tran@logigear.com' 
	$Mail.Subject = 'Hi All' 
	$Mail.Body = 'Please check Algoria search on TA docs.'
	$Mail.Send()
	$Outlook.Quit()
}