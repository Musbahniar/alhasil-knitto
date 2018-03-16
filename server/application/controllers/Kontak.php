<?php 
class Kontak extends CI_Controller {

	/**
	 *@author : Musbahniar
	 * @web : http://go-learn.web.id
	**/ 
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Kontak_model');
		header('Access-Control-Allow-Origin: *');
    	//header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	}
	
	public function index()
	{
 		 $data    = json_decode(file_get_contents("php://input"));
         $cekdata = $this->Kontak_model->addKontak($data->nama, $data->email, $data->hp, $data->pesan);

         echo json_encode($cekdata);
	}


	//pasangan construct adalah destruct untuk menghapus inisialisasi class pada memori
	function __destruct(){
	}
}
