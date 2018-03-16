<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/*
| -------------------------------------------------------------------
| EMAIL CONFING
| -------------------------------------------------------------------
| Configuration of outgoing mail server.
| */
 
$config['wordwrap'] = FALSE;
$config['mailtype'] = 'html';
$config['crlf'] = '\r\n';
$config['charset']='utf-8';
$config['newline']="\r\n";
$config['priority']=1;
$config['protocol']='smtp';
$config['smtp_host']='ssl://smtp.gmail.com';
$config['smtp_port']='465';
$config['smtp_timeout']='30';
$config['smtp_user']='ruang.9campus@gmail.com';
$config['smtp_pass']='*********';
$config['newline']="\r\n";
 
/* End of file email.php */
/* Location: ./system/application/config/email.php */