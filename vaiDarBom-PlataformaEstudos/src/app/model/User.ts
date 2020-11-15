export class User{
    public id: number
    public usuario: string
    public nome: string
    public senha: string
}

/*
@Entity
@Table(name="usuario")
public class Usuario {
    
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private long id;
	
	@NotNull
	@Size(min=1, max=100)
	private String usuario;

	@NotNull
	@Size(min=1, max=100)
	private String nome;

	@NotNull
	@Size(min=8)
	private String senha;
*/