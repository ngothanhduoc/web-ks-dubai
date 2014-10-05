<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Home extends CI_Controller {

    function __construct() {
        parent::__construct();


        $this->load->library('Detect');
        $this->Detect = new Detect();
        $this->load->model('frontend/m_home');
        if ($this->Detect->isMobile() || $this->Detect->isTablet()) {
            $this->template->set_template('wap');
        } else {
            $this->template->set_template('home_web');
        }
    }

    public function index() {
        $post = $this->input->post(NULL, TRUE);
        if (!empty($post)) {
            unset($post['submit']);
            $this->m_home->_table = "contact";
            $this->m_home->insert($post);
            echo " 
                <script>alert('Thanks for send contact message!');</script>
            ";
        }

        $this->m_home->_table = "article";
        $this->m_home->_key = "id";
        $data['home'] = $this->m_home->get_by_id(3);

        if ($this->Detect->isMobile() || $this->Detect->isTablet()) {
            $this->template->write_view('content', 'website/wap/slide_home', $data);
        } else {

            $this->template->write_view('content', 'website/slide_home', $data);
        }
        $this->template->render();
    }

    public function ajax_home() {
        $data['slide'] = $this->m_home->get_slide();
        if ($this->Detect->isMobile() || $this->Detect->isTablet()) {
            $this->load->view('website/wap/slide_home', $data);
        } else {
            $this->load->view('website/slide_home', $data);
        }
    }

    public function ajax_about() {
        $this->m_home->_table = "article";
        $this->m_home->_key = "id";
        $data = $this->m_home->get_by_id(2);
        $data['product'] = $this->m_home->get_product(12);
        if ($this->Detect->isMobile() || $this->Detect->isTablet()) {
            $this->load->view('website/wap/view_about', $data);
        } else {
            $this->load->view('website/view_about', $data);
        }
    }

    public function ajax_menu() {
        $this->m_home->_table = "article";
        $this->m_home->_key = "id";
        $data = $this->m_home->get_by_id(1);
        $this->load->view('website/view_menu', $data);
    }

    public function ajax_reservations() {
        if ($this->Detect->isMobile() || $this->Detect->isTablet()) {
            $this->load->view('website/wap/view_reservations');
        } else {
            $this->load->view('website/view_reservations');
        }
        
    }

    public function ajax_product() {
        $page = $this->input->get("page", TRUE);
        if (!is_array($page))
            $data['product'] = $this->m_home->get_product(12, $page);
        if (!empty($data['product'])) {
            if ($this->Detect->isMobile() || $this->Detect->isTablet()) {
                $this->load->view('website/wap/view_product', $data);
            } else {
                $this->load->view('website/view_product', $data);
            }
            
        } else {
            echo "end";
        }
    }

}
