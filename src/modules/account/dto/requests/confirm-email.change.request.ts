import { ApiProperty } from '@nestjs/swagger'
import {
	IsEmail,
	IsNotEmpty,
	IsNumberString,
	IsString,
	Length
} from 'class-validator'

export class ConfirmEmailChangeRequest {
	@ApiProperty({
		example: 'test@test.com'
	})
	@IsString()
	@IsEmail()
	public email: string

	@ApiProperty({
		example: '123456'
	})
	@IsNotEmpty()
	@IsNumberString()
	@Length(6, 6)
	public code: string
}
