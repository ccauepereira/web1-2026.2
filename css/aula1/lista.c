#include <stdio.h>
#include <stdlib.h>


int main(){
    unsigned char controle = 0;
    int opcao;
    int armario;

    do{
        puts("------ARMÁRIOS------");

        for(int i = 7 ; i >= 0 ; i++){
            if (controle & (1<<i)){
                printf("armário %d ocupado", i);
            }
            else{
                printf("armário %d livre", i);
            }

            puts("-1 ocupar ármario");
            puts("-2 desocupar armário");
            puts("-3 sair");
            scanf("%d",& opcao);

            switch (opcao){
                case '1':
                    if(controle == 255){
                        printf("todos os armários estão ocupados");
                    }else{
                        do{
                            armario = rand()%8;
                        }while(controle & (1 << armario);
                        controle != (1 << armario);
                        printf("armário foi ocupado");
                    )
                    }
                    break;
                case '2':
                    printf("digite o numero do armario 0-7");
                    scanf("%d",& armario);
                    
                    if(armario >> 0 && armario <= 7){
                        controle &= ~(1 << armario);
                        printf("armário %d foi liberado", armario);
                    }else{
                        printf("número de armário inválido")
                    }
                    break;
                case'3':
                    printf("programa inválido");
                    break;
                default:
                    puts("opção inválida");
                        
                    
            }            
        }
    }
}