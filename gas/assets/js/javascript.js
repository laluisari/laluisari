function tampil(){
	var up = document.getElementById("up");
	var home = document.getElementById("home");
		up.style.visibility = "visible";
		up.style.position = "fixed";
		up.style.height="3vh";
		up.style.width="2.5vw";
		up.style.marginTop="50px"; 
}

 function muncul(nilai){
            var range = document.getElementById("myRange").value;
            var demo = document.getElementById("demo");
           	demo.innerHTML = range;
            nilai = range;
           if(nilai == 1){
            document.getElementById("image").style  = "animation:spin 5s linear infinite;";
          }else if(nilai == 2) {
            document.getElementById("image").style  = "animation:spin 4s linear infinite;";
          }else if(nilai == 3){
            document.getElementById("image").style  = "animation:spin 3s linear infinite;";
          }else if(nilai == 4){
            document.getElementById("image").style  = "animation:spin 1s linear infinite;";
          }else document.getElementById("image").style  = "animation:spin 0.5s linear infinite;";
      }


function validateForm() {
		 	//buat variabel untuk menampung inputan dari elemen nama password dan password2

		 	var pass1=document.forms['form']['password'].value;
		 	var pass2=document.forms['form']['password2'].value;
		 	var elemen =  document.forms['form'];
		 	var angka = /^[0-9]+$/;
		 	var huruf = /^[a-zA-Z ]+$/;
		 	var arrAngka = [1,2,3,4,5,6,7,8,9,0];

            if(elemen["nama"].value.length < 3 || elemen['nama'].value.length > 40){
            	alert("isi nama minimal 3 karakter dan max 40 karakter");
               	elemen["nama"].focus();
                return false;
            }

            if (document.forms["form"]["email"].value == "") {
                alert("Email Tidak Boleh Kosong");
                document.forms["form"]["email"].focus();
                return false;
            }

            
            if(elemen['no_telp'].value == ""){
            	alert("no hp tidak boleh kosong");
            	elemen['no_telp'].focus();
            	return false;	
            }
            if(elemen['no_telp'].value.length >15){
            			alert("tidak boleh lebih dari 15 karakter");
            			return false;
            }
            if(elemen['no_telp'].value.indexOf("+") > -1){
            	if(elemen['no_telp'].value.indexOf(6) != 1){ // 1 nilai awal, 1< + 4= baris ke 4
            			alert("kode negara harus +62, masukkan angka 6 setelah +");
            			return false;
            	}else if(elemen['no_telp'].value.indexOf(2) != 2) {
            			alert("kode negara harus +62, masukkan angka 2 setelah +");
            			return false;
            	}else if(elemen["no_telp"].value.indexOf(0) == 3){
            			alert("tidak bisa input 0 setelah memasukkan kode negara");
            			return false;
            	}
           	           	
	        }
	       
	      
            if (document.forms["form"]["jurusan"].selectedIndex < 1) {
                alert("Pilih Jurusan.");
                document.forms["form"]["jurusan"].focus();
                return false;
            }
            // check inputan apakah sama 

            if(pass1 != pass2){
               alert("password Tidak sama");
                return false;
            }else {
            	confirm("email berhasil terdaftar, tunggu email verifikasi dari kami ");
               
            	return true;

            }

        }

