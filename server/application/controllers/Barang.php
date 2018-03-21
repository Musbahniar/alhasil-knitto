<?php 

class Barang extends CI_Controller {

	/**
	 *@author : Musbahniar
	 * @web : http://onthestreet.web.id
	 * @keterangan : Controller untuk halaman awal ketika aplikasi Ujian Online web based diakses
	**/ 
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Barang_model');
		header('Access-Control-Allow-Origin: *');
    	//header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	}
	
	public function getBarang()
	{
		$barang = $this->Barang_model->getBarang();
        echo json_encode($barang);
	}



	//pasangan construct adalah destruct untuk menghapus inisialisasi class pada memori
	function __destruct(){
	}
}
