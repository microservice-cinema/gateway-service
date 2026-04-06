import { ApiProperty } from '@nestjs/swagger'
import {
	IsNotEmpty,
	IsNumberString,
	IsString,
	Length,
	Matches
} from 'class-validator'

export class ConfirmPhoneChangeRequest {
	@ApiProperty({
		example: '+79999999999'
	})
	@IsString()
	@Matches(/^\+?\d{10,15}$/)
	public phone: string

	@ApiProperty({
		example: '123456'
	})
	@IsNotEmpty()
	@IsNumberString()
	@Length(6, 6)
	public code: string
}
