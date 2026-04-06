import { ApiProperty } from '@nestjs/swagger'
import { IsString, Matches } from 'class-validator'

export class InitPhoneChangeRequest {
	@ApiProperty({
		example: '+79999999999'
	})
	@IsString()
	@Matches(/^\+?\d{10,15}$/)
	public phone: string
}
