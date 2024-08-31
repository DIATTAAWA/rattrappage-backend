import { Controller, Post, Body, ValidationPipe, BadRequestException } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactDto } from './contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async createMessage(@Body(new ValidationPipe()) ContactDto: ContactDto) {
    try {
      await this.contactService.saveContactMessage(ContactDto);
      return { message: 'Message received successfully!' };
    } catch (error) {
      throw new BadRequestException('Failed to process the message');
    }
  }
}
