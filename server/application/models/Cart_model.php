<?php
class Cart_model extends CI_Model {

	function simpanBeli($data)
	{
		 $response = array();
 		 foreach ($data as $row) 
			{
				$this->db->query("INSERT INTO tbl_Dbeli (c_IdBarang,c_Harga,c_JmlBeli) 
							VALUES ('".$row->id."', '".$row->hargakg."', '".$row->jml."')");
			}

				
		$response["status"] = "ok";
		return $response;
	}
}
