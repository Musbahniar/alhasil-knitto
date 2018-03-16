<?php 

class Login extends CI_Controller {

	/**
	 *@author : Musbahniar
	 * @web : http://onthestreet.web.id
	 * @keterangan : Controller untuk halaman awal ketika aplikasi Ujian Online web based diakses
	**/ 
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Login_model');
		header('Access-Control-Allow-Origin: *');
    	//header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	}
	
	public function index()
	{
		$data    = json_decode(file_get_contents("php://input"));
        $cekdata = $this->Login_model->cek_user_login($data->email, $data->password);

        echo json_encode($cekdata);
	}

	public function getAja()
	{
		$cekdata = $this->Login_model->ambilAja();
        echo json_encode($cekdata);
	}


	//pasangan construct adalah destruct untuk menghapus inisialisasi class pada memori
	function __destruct(){
	}
}
