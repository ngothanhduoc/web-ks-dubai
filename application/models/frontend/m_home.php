<?php

/**
 * Description of admin
 *
 * @author tailm
 */
class M_home extends MY_Model {

    var $_dbgroup = 'db';
    var $_table = 'game';
    protected $_total = 0;
    
    public function __construct() {
        parent::__construct();
    }

    function get_product($limit, $offset = ''){
        $this->db_slave->select("*")
                              ->from("product")
                              ->where("status", "on")
                ;
        if($offset != "")
            $this->db_slave->limit($limit, $offset);
        else 
            $this->db_slave->limit($limit);
        $sql = $this->db_slave->get();
        return $sql->result_array();
    }
    function get_slide() {
        $this->db_slave->select("*")
                              ->from("slide")
                              ->where("status", "on")
                ;
        $sql = $this->db_slave->get();
        return $sql->result_array();
    }
    

}