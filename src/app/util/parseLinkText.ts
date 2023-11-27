import { PaginationElement } from "../interface/pagination-element";

const parseLinkText = (linkText:string): PaginationElement =>{
    let paginationElement:PaginationElement={};
    let linkHeadersContent = linkText.split(',');
    for(let i=0; i<linkHeadersContent.length;i++){
      let datumArray = linkHeadersContent[i].split(';');
      let direction = datumArray[1].trim().substring(5, datumArray[1].length-2);
      let url = datumArray[0].trim();
      url = url.substring(1, url.length-1);
      if(direction=="prev"){
        paginationElement.prev = url;
      }else if (direction=="next"){
        paginationElement.next = url;
      }else if (direction=="first"){
        paginationElement.first = url;
      }else if (direction=="last"){
        paginationElement.last = url;
      }
    }
    return paginationElement;
}

export default parseLinkText;