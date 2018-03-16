<?php
class Kontak_model extends CI_Model {

	function addKontak($nama, $email, $hp, $pesan)
	{
		$response = array();
		$data = array(
				'c_Nama' => $nama,
				'c_Email' => $email,
				'c_Telp' => $hp,
				'c_Pesan' => $pesan
			);
		$this->db->insert('tbl_kontak',$data);
		$response["status"] = "ok";
		return $response;
	}
}
