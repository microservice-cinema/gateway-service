import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString } from 'class-validator'

export class InitEmailChangeRequest {
	@ApiProperty({
		example: 'test@test.com'
	})
	@IsString()
	@IsEmail()
	public email: string
}
