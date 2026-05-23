import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class GetMeResponse {
	@ApiProperty({
		example: 'E4sufy7FMujstfrLHzdSS'
	})
	public id: string

	@ApiPropertyOptional({
		example: 'Gosha Lebowski'
	})
	public name: string

	@ApiProperty({
		example: 'goshalebowski@test.com'
	})
	public email: string

	@ApiProperty({
		example: '+79999999999'
	})
	public phone: string

	@ApiPropertyOptional({
		example:
			'https://img.magnific.com/free-vector/simple-vibing-cat-square-meme_742173-4493.jpg?semt=ais_hybrid&w=740&q=80'
	})
	public avatar: string
}
