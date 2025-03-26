package br.univille.controller;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JOptionPane;

public class ControllerPessoa implements ActionListener {

    @Override
    public void actionPerformed(ActionEvent e) {
        if(((JButton)e.getSource()).getName().equals("BtnSair")){
            System.exit(0);
        };
        JOptionPane.showMessageDialog(null, "Eu não acredito!!");
    }

}
    
