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
            $this->template->write_view('header', 'layouts/wap/header', array());
            $this->template->write_view('banner', 'layouts/wap/banner', $data);
            $this->template->write_view('menu', 'layouts/wap/menu', array());
            $this->template->write_view('footer', 'layouts/wap/footer', array());
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
        if ($this->Detect->isMobile() || $this->Detect->isTablet()) {

            $this->template->write_view('content', 'website/home/index_wap');
        } else {
            $this->m_home->_table = "article";
            $this->m_home->_key = "id";
            $data['home'] = $this->m_home->get_by_id(3);
            $this->template->write_view('content', 'website/slide_home', $data);
        }
        $this->template->render();
    }

    public function ajax_home() {
        $data['slide'] = $this->m_home->get_slide();
        $this->load->view('website/slide_home', $data);
    }

    public function ajax_about() {
        $this->m_home->_table = "article";
        $this->m_home->_key = "id";
        $data = $this->m_home->get_by_id(2);
        $data['product'] = $this->m_home->get_product(12);
        $this->load->view('website/view_about', $data);
    }

    public function ajax_menu() {
        $this->m_home->_table = "article";
        $this->m_home->_key = "id";
        $data = $this->m_home->get_by_id(1);
        $this->load->view('website/view_menu', $data);
    }

    public function ajax_reservations() {

        $this->load->view('website/view_reservations');
    }

    public function ajax_product() {
        $page = $this->input->get("page", TRUE);
        if (!is_array($page))
            $data['product'] = $this->m_home->get_product(12, $page);
        if (!empty($data['product']))
            $this->load->view('website/view_product', $data);
        else {
            echo "end";
        }
    }

}
