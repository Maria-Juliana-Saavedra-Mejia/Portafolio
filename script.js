 // Crear estilos CSS dinámicamente
 const style = document.createElement('style');
 style.textContent = `
     /* Estilos del Modal */
     .modal {
         display: none;
         position: fixed;
         z-index: 1000;
         left: 0;
         top: 0;
         width: 100%;
         height: 100%;
         background-color: rgba(0, 0, 0, 0.5);
         animation: fadeIn 0.3s ease;
     }

     .modal-content {
         background-color: #1a1a1a;
         margin: 10% auto;
         padding: 30px;
         border: 0.1vw solid #52e88b;
         box-shadow: 0 0 20px 2px #52e88b;
         border-radius: 15px;
         width: 90%;
         max-width: 500px;
         position: relative;
         color: white;
         font-family: 'ligth';
     }

     .close {
         color: #52e88b;
         float: right;
         font-size: 28px;
         font-weight: bold;
         cursor: pointer;
         transition: color 0.3s ease;
         position: absolute;
         right: 20px;
         top: 15px;
     }

     .close:hover,
     .close:focus {
         color: #5ad98b;
     }

     .modal h3 {
         color: #52e88b;
         margin-bottom: 20px;
         font-size: 24px;
         text-align: center;
         font-family: 'bold';
     }

     .modal p {
         line-height: 1.6;
         color: white;
         font-size: 16px;
         text-align: justify;
         font-family: 'ligth';
     }

     .modal ul {
         list-style: none;
         padding: 0;
     }

     .modal li {
         margin-bottom: 15px;
         padding: 15px;
         background: rgba(82, 232, 139, 0.1);
         border-radius: 8px;
         border-left: 4px solid #52e88b;
         line-height: 1.5;
         color: white;
         font-family: 'ligth';
     }

     .modal li:before {
         content: "✓";
         color: #52e88b;
         font-weight: bold;
         margin-right: 10px;
     }

     @keyframes fadeIn {
         from { opacity: 0; }
         to { opacity: 1; }
     }

     /* Responsive */
     @media (max-width: 768px) {
         .modal-content {
             margin: 15% auto;
             padding: 20px;
             width: 95%;
         }
     }
 `;
 document.head.appendChild(style);

 // Esperar a que el DOM esté completamente cargado
 document.addEventListener('DOMContentLoaded', function() {
     // Obtener todos los botones y modales
     const botones = document.querySelectorAll('.botones');
     const modales = document.querySelectorAll('.modal');
     const closeButtons = document.querySelectorAll('.close');

     // Función para abrir modal
     function abrirModal(modalId) {
         const modal = document.getElementById(`modal-${modalId}`);
         if (modal) {
             modal.style.display = 'block';
             document.body.style.overflow = 'hidden';
         }
     }

     // Función para cerrar modal
     function cerrarModal(modal) {
         modal.style.display = 'none';
         document.body.style.overflow = 'auto';
     }

     // Event listeners para los botones
     botones.forEach(boton => {
         boton.addEventListener('click', function() {
             const modalId = this.getAttribute('data-modal');
             abrirModal(modalId);
         });
     });

     // Event listeners para los botones de cerrar
     closeButtons.forEach(closeBtn => {
         closeBtn.addEventListener('click', function() {
             const modal = this.closest('.modal');
             cerrarModal(modal);
         });
     });

     // Cerrar modal al hacer click fuera de él
     modales.forEach(modal => {
         modal.addEventListener('click', function(e) {
             if (e.target === this) {
                 cerrarModal(this);
             }
         });
     });

     // Cerrar modal con la tecla Escape
     document.addEventListener('keydown', function(e) {
         if (e.key === 'Escape') {
             modales.forEach(modal => {
                 if (modal.style.display === 'block') {
                     cerrarModal(modal);
                 }
             });
         }
     });
 });



document.getElementById("formContacto").addEventListener("submit", function(event) {
  event.preventDefault();
  document.getElementById("mensajeConfirmacion").style.display = "block";
  this.reset();
});
