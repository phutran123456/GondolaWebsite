$Outlook = New-Object -ComObject Outlook.Application
$Mail = $Outlook.CreateItem(0)
$Mail.To = 'phu.tran@logigear.com' 
$Mail.Subject = 'Hi All' 
$Mail.Body = 'Please check Algoria search on TA docs.'
$Mail.Send()

