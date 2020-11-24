/*@Id	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@NotEmpty
	@Size(min = 10, max = 5000)
	private String textoDaMensagem;	
	
	@ManyToOne
	@JsonIgnoreProperties("mensagem")
	private Postagem postagem;

	@Temporal(TemporalType.TIMESTAMP)
    private Date data = new java.sql.Date(System.currentTimeMillis());
	
    private String usuario;
*/