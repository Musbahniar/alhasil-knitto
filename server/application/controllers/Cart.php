<?php 

class Cart extends CI_Controller {

	/**
	 *@author : Musbahniar
	 * @web : http://onthestreet.web.id
	 * @keterangan : Controller untuk halaman awal ketika aplikasi Ujian Online web based diakses
	**/ 

	public function __construct()
	{
		parent::__construct();
		$this->load->model('Cart_model');
		header('Access-Control-Allow-Origin: *');
    	//header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
	}

	public function index()
	{
 		 // $response = array();
 		 $now = date('Y-m-d');
 		 $data    = json_decode(file_get_contents("php://input"));
         // $cekdata = $this->Cart_model>simpanBeli($data);
         // echo json_encode($cekdata);

 		 foreach ($data as $rowBeli) 
			{
				$CekHasil = $this->db->query("SELECT c_IdBarang FROM tbl_Dbeli WHERE c_IdBarang = '".$rowBeli->id."' AND c_Email = '".$rowBeli->email."' AND c_TanggalBeli = '$now'")->row();
				if (empty($CekHasil)){
					$this->db->query("INSERT INTO tbl_Dbeli (c_Email,c_TanggalBeli,c_IdBarang,c_Harga,c_JmlBeli) 
							VALUES ('".$rowBeli->email."', '".$now."', '".$rowBeli->id."', '".$rowBeli->hargakg."', '".$rowBeli->jml."')");
				} else {
					$this->db->query("UPDATE tbl_Dbeli SET c_JmlBeli = c_JmlBeli + '".$rowBeli->jml."' WHERE c_IdBarang = '".$rowBeli->id."' AND c_Email = '".$rowBeli->email."' AND c_TanggalBeli = '$now'");
				}
				$this->db->query("UPDATE tbl_barang SET c_StokKg = c_StokKg - $rowBeli->jml WHERE c_IdBarang = $rowBeli->id");
			}

				
		$status = "ok";
		echo $status;
	}

	//pasangan construct adalah destruct untuk menghapus inisialisasi class pada memori
	function __destruct(){
	}
}
