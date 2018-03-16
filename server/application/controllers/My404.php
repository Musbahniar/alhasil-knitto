<?php 
class My404 extends CI_Controller 
{
    public function __construct() 
    {
        parent::__construct(); 
    } 

    public function index() 
    { 
        //$this->output->set_status_header('404'); 
        $d['judul'] = "404";
        $this->load->view('form_404',$d);//loading in my template 
    } 
} 
?> 