/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let length = 0;
        let cur = head;

        while(cur){
            length++;
            cur = cur.next;
        }

        const removeIndex  = length - n;

        if(removeIndex === 0){
            return head.next;
        }

        cur = head;
        for(let i = 0; i < length - 1; i++){
            if(i + 1  === removeIndex){
                cur.next = cur.next.next;
                break;
            }

            cur = cur.next;
        }

        return head;
    }
}
