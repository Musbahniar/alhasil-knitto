<?php

class Barang_model extends CI_Model {
	
	function getBarang(){
         return  $this->db->query("SELECT * FROM tbl_barang WHERE c_StokKg >= 1")->result_array();
	}
}
