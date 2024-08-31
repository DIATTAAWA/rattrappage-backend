import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactMessage } from './contact-message.entity';
import { ContactDto } from './contact.dto';


@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(ContactMessage)
    private readonly contactRepository: Repository<ContactMessage>,
  ) {}

  async saveContactMessage(contactDto: ContactDto): Promise<ContactMessage> {
    const contactMessage = this.contactRepository.create(contactDto);
    return await this.contactRepository.save(contactMessage);
  }
}
